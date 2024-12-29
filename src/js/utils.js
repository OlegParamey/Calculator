export function formatNumber(num) {
    return num.endsWith('.') ? num.slice(0, -1) : num;
}
