function Avatar() {
  return (
    <div className="flex-1">
      <div
        className="rounded-full bg-avatar w-16 h-16 bg-cover shadow-sm"
        style={{ backgroundPositionY: "20%" }}
      ></div>
    </div>
  );
}

export default Avatar;
