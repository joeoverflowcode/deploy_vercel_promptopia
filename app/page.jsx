import Feed from "@components/Feed"

const Home = () => {
  return (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover  &  Share 
      <br className="max-md:hidden"/>
      {/* <br /> */}
      <span className="orange_gradient text-center"> Foreign Language </span> 
      <br/>AI-Prompts
    </h1>
    <p className="desc text-center">
      Promptopia is an open-source AI-prompt database for AI foreign language conversations. Create, edit and share various prompts that enable any AI of your choice to simulate a foreign language conversation. 
    </p>

    <Feed />
  </section>
  )
}

export default Home