export function GetColor(color: "success" | "error" | "primary" | 'light-gray' | undefined){
    if(color === 'success') return 'var(--success-color)'
    if(color === 'error') return 'var(--error-color)'
    if(color === 'primary') return 'var(--primary-color)'
    if(color === 'light-gray') return 'var(--light-gray-color)'
    return 'white' 
}