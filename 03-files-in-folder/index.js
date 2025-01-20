const fs = require('fs/promises');
const path = require('path');

const secretFolder = path.join(__dirname, 'secret-folder');

async function displayFilesInfo() {
  const files = await fs.readdir(secretFolder, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(secretFolder, file.name);

    if (file.isFile()) {
      const fileExtension = path.extname(file.name).slice(1);
      const stats = await fs.stat(filePath);
      const fileSize = stats.size / 1024;

      console.log(
        `${path.parse(file.name).name} - ${fileExtension} - ${fileSize.toFixed(
          3,
        )}kb`,
      );
    }
  }
}

displayFilesInfo();
