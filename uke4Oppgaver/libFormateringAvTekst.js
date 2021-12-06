function fixText(text) {
    const str = text.trim()
    const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str2;
}