export function GetColor(color: "success" | "error" | "primary" | undefined){
    if(color === 'success') return 'var(--success-color)'
    if(color === 'error') return 'var(--error-color)'
    if(color === 'primary') return 'var(--primary-color)'
    return 'white' 
}