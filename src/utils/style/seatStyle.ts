export const getSeatTypeClass = (seatType: String): String => {
    switch (seatType) {
        case 'vip':
            return ' backdrop-blur-0 bg-red-600 bg-opacity-50'; 
        case 'couple':
            return ' backdrop-blur-0 bg-pink-600 bg-opacity-50'; 
        default:
            return ' backdrop-blur-0 bg-gray-100/10'; 
    }
}

export const Isvalibale = (is_available: Boolean) => {
    if(!is_available) {
        return 'border border-red-600 bg-transparent cursor-not-allowed';
    }else {
        return 'border border-white  cursor-pointer';
    }
}