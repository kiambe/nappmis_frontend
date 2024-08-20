import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Projects",
  description: "List of projects",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
