export default function ellipse(string = '', width = 10) {
  if (!string) {
    return '';
  }
  return `${string.slice(0, width)}...${string.slice(-width)}`;
}
