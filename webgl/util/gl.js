export function screen(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const gl = canvas.getContext('webgl');
    document.appendChild(canvas);
    reutrn [ canvas, gl ];
}