function fixText(text) {
    if(!text) return false;
    const atIndex = text.indexOf('@')
    if(atIndex != -1 && 
        text.indexOf(' ') == -1 && 
        text.indexOf('.') < atIndex &&
        text.indexOf('.', atIndex) > atIndex
    ) {
        return true;
    }   else return false;
}