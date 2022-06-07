function extractFile(path) {
    let extensionIndex = path.lastIndexOf('.');
    let extension = path.substring(extensionIndex + 1);
    let titleIndex = path.lastIndexOf("\\");
    let title = path.substring(titleIndex + 1, extensionIndex);
    console.log(`File name: ${title}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');