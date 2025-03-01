export default function modulo(number, mod) {
  return (number % mod + mod) % mod;
}