export default function QRCode({
  urlLink,
  sizeX,
  sizeY,
}: {
  urlLink: string;
  sizeX: string;
  sizeY: string;
}) {
  return (
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?data=${urlLink}&size=[${sizeX}]x[${sizeY}]`}
      alt="generated QR code"
    />
  );
}
