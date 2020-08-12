import * as Print from "expo-print";
// import * as FileSystem from "expo-file-system";

const CreatePDF = async (html) => {
    const response = await Print.printToFileAsync({ 'html': html, 'width': 612, 'height': 792 });
    return response;
}

export default CreatePDF;