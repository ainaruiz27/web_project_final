export function jsonToText(json) {
    let result = '';
    for (let i in json) {
        result += `${i}: ${json[i]}\n`
    }
    return result;
}