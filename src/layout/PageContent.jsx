const PageContent = ({ children }) => (
  <main
    className="
      flex
      flex-1
      flex-col
      w-full
      max-w-[1280px]
      mx-auto
      gap-12
      px-4
      sm:px-8
      py-10
      outline outline-2 outline-red-500
    "
  >
    {children}
  </main>
)

export default PageContent
