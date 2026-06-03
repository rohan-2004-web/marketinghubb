# Contact Form & Admin Dashboard Guide

## 🎯 Features Implemented

### 1. **Floating Contact Form** ✅
- Appears automatically after 5 seconds on every page
- Located at bottom-right corner
- Can be closed by clicking the ✕ button
- Fields: Name, Email, Mobile Number, Service (dropdown)
- Compact and mobile-friendly design
- Shows success/error messages

### 2. **Contact Page Form** ✅
- Located below the map on the contact page
- Same functionality as floating form but full-width
- Always visible to users on that page

### 3. **Admin Dashboard** ✅
- Protected with password authentication
- Password: `saurabh@2004`
- View all form submissions in a table format
- Filter by service type
- Statistics: Total submissions, this month, today
- Clickable email and phone links
- Logout functionality

---

## 📱 How to Use

### **For Website Visitors:**

1. **Floating Form** (appears automatically after 5 seconds):
   - Fill in your details
   - Select a service
   - Click "Send"
   - You'll see a confirmation message

2. **Contact Page Form** (at `/contact`):
   - Scroll below the map
   - Fill in the form
   - Click "Submit Request"

### **For Admin:**

1. **Login to Admin Dashboard:**
   - Go to `/admin-login`
   - Enter password: `saurabh@2004`
   - Click "Login"

2. **View Submissions:**
   - See all form submissions in the dashboard
   - Use the filter dropdown to view by service
   - Click email or phone to contact directly
   - View statistics at the top

3. **Logout:**
   - Click the "Logout" button in the top right

---

## 🔐 Admin Credentials

```
URL:      /admin-login
Password: saurabh@2004
```

---

## 📊 Form Data

**Form Fields:**
- Name (required)
- Email (required)
- Mobile Number (required)
- Service (dropdown) - Options:
  - SEO Optimization
  - Social Media Marketing
  - PPC Advertising
  - Website Design
  - Graphic Design
  - Email Marketing
  - Other

**Data Storage:**
- All submissions stored in `/data/submissions.json`
- Each submission gets a unique ID and timestamp
- Can be exported for email marketing or CRM integration

---

## 📂 File Structure

```
app/
├── components/
│   └── FloatingContactForm.tsx      # Reusable form component
├── contact/
│   └── page.tsx                     # Updated contact page
├── admin-login/
│   └── page.tsx                     # Admin login page
├── admin-dashboard/
│   └── page.tsx                     # Admin dashboard
├── admin/
│   └── page.tsx                     # Redirects to /admin-login
└── layout.tsx                       # Updated with floating form

lib/
├── submissions.ts                   # Submission utilities

api/
├── contact/
│   └── route.ts                     # Form submission endpoint
└── submissions/
    └── route.ts                     # Get all submissions
```

---

## 🛠️ Technical Details

### **FloatingContactForm Component:**
- Client-side component with auto-show after 5 seconds
- Form validation for all fields
- Error handling and success feedback
- Service dropdown uses short codes (seo, smm, ppc, etc.)
- Posts to `/api/contact` endpoint

### **Admin Authentication:**
- Simple localStorage-based session
- Password check: `saurabh@2004`
- Persists across browser sessions
- Logout clears session

### **Data Management:**
- Submissions stored in `data/submissions.json`
- Each entry has: id, name, email, phone, service, message, createdAt
- Sortable by service type
- Statistics calculated on the fly

---

## 🚀 How to Extend

### **Add More Services:**
Edit the `serviceOptions` array in `FloatingContactForm.tsx`:
```typescript
const serviceOptions = [
  { value: 'seo', label: 'SEO Optimization' },
  // Add more services here
];
```

### **Change Admin Password:**
Edit the password check in `/app/admin-login/page.tsx`:
```typescript
if (password === 'new_password_here') {
  // Login logic
}
```

### **Customize Appearance:**
Edit Tailwind classes in:
- `app/components/FloatingContactForm.tsx` (form styling)
- `app/admin-dashboard/page.tsx` (dashboard styling)

---

## ✅ Testing

1. **Test Floating Form:**
   - Open any page
   - Wait 5 seconds for form to appear
   - Fill and submit
   - Check `/admin-dashboard` to see the submission

2. **Test Contact Page:**
   - Go to `/contact`
   - Scroll to form below map
   - Fill and submit
   - Check admin dashboard

3. **Test Admin Login:**
   - Go to `/admin-login`
   - Try wrong password (should show error)
   - Enter `saurabh@2004` (should login)
   - View submissions table
   - Click logout

---

## 📝 Notes

- Forms are responsive and work on mobile
- Admin dashboard has statistics dashboard
- All data persists across server restarts
- Email and phone fields are validated
- Service selection is required
- Floating form doesn't show on `/admin-login` or `/admin-dashboard` pages (can be configured)

---

*Last Updated: June 3, 2026*
