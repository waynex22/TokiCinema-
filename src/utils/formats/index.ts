export const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export const formatTime = (dateString: any) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}
export const getNumberFromString = (str: string): number | null => {
    const result = str.match(/\d+/);
    return result ? parseInt(result[0]) : null;
}
export const addMinutesToTime = (time: string, minutesToAdd: any) =>  {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes);
    date.setMinutes(date.getMinutes() + minutesToAdd);
    const newHours = date.getHours().toString().padStart(2, '0');
    const newMinutes = date.getMinutes().toString().padStart(2, '0');
    return `${newHours}:${newMinutes}`;
}

export const formatNumberToVND = (price : Number) => {
    const parts = price.toFixed(0).toString().split(".");
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? parts[1] : "";
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const formattedNumber = integerPart + (decimalPart ? "." + decimalPart : "" + "₫");

    return formattedNumber;
}
