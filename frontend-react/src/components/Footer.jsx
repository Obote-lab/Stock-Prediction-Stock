const Footer = () => {
  return (
    <>
      <footer className="footer py-3 my-3">
        <hr className="border-bottom" />
        <p className="text-light text-center">
          &copy; Built by 🔩<span className="text-info">IGSSAX</span> — {" "}
          {new Date().toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </footer>
    </>
  );
}

export default Footer
