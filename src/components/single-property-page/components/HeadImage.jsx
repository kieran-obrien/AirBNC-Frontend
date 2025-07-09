export default function HeadImage({ propertyDetails }) {
  return (
    <label htmlFor="property-images-drawer">
      <img
        src={propertyDetails.images?.[0] || null}
        className="w-screen cursor-pointer transition delay-100 duration-300 ease-in-out hover:scale-110"
        alt="Property image"
      />
    </label>
  );
}
