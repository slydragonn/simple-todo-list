
export default function dateFormat(format){

    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const firstReplace = format.replace('yy', year);
    const secondReplace = firstReplace.replace('mm', month);
    const finalReplace = secondReplace.replace('dd', day);

    return finalReplace;

}