rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // ===============================================================
    // Assumed Data Model
    // ===============================================================
    //
    // Collection: users
    // Document ID: {userId} (matches request.auth.uid)
    // Fields:
    //   - uid: string (required) - Firebase Auth UID
    //   - name: string (required) - Display name
    //   - email: string (required, email format) - User email
    //   - photoURL: string (optional, URL format) - Profile photo URL
    //   - loginTime: string (required, ISO 8601 format) - Last login timestamp
    //
    // ===============================================================

    // ===============================================================
    // Helper Functions
    // ===============================================================
    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }

    function isValidEmail(email) {
      return email is string && email.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    }

    function isValidUrl(url) {
      return url is string && (url.matches("^https://.*") || url.matches("^http://.*"));
    }

    function isValidDateString(dateStr) {
      return dateStr is string && dateStr.matches("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z?$");
    }

    function isValidUser(data) {
      return data.keys().hasAll(['uid', 'name', 'email', 'loginTime']) &&
             data.keys().hasOnly(['uid', 'name', 'email', 'photoURL', 'loginTime']) &&
             data.uid == request.auth.uid &&
             data.name is string && data.name.size() > 0 && data.name.size() < 100 &&
             isValidEmail(data.email) &&
             isValidDateString(data.loginTime) &&
             (!('photoURL' in data) || isValidUrl(data.photoURL));
    }

    match /users/{userId} {
      allow read: if isOwner(userId);
      allow create, update: if isOwner(userId) && isValidUser(request.resource.data);
    }
  }
}
