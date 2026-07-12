## Multer:
```
Multer is an Express middleware used to handle file uploads (multipart/form-data) in Node.js.
It processes uploaded files, saves them (to disk or memory), and makes them available through req.file or req.files.
```

## What does req.file contain?
```

req.file is an object containing information about the uploaded file.

Example:

{
  fieldname: 'photo',
  originalname: 'cat.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'photo_1720800112345.png',
  path: 'uploads/photo_1720800112345.png',
  size: 52341
}

Important properties:

Property	Meaning
fieldname	Name of the HTML file input (name="photo")
originalname	Original filename from the user's computer
mimetype	File type (e.g., image/png)
filename	Name assigned by Multer when saving
destination	Folder where the file is stored
path	Complete file path
size	File size in bytes

```

## What is enctype="multipart/form-data"?
```
enctype="multipart/form-data" tells the browser to send form data in multiple parts, allowing files and normal form fields to be uploaded together.

Without it, file uploads will not work, because the browser won't send the file data correctly.

Example:

<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="photo">
    <button>Upload</button>
</form>

Remember:

application/x-www-form-urlencoded → Text data only (default).
multipart/form-data → Text + file uploads.
```
