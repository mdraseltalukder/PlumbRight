
export default function Statement() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className=" statement gap-8 px-9">
        <div className="relative aspect-[3/4] w-full">
          <img
            src="images/mission-statement.jpg"
            alt="Professional plumber standing next to service van"
     
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className=" font-bold tracking-tight text-gray-900">
              Mission Statement <span className="inline-block w-12 h-1 bg-[#9900ff] ml-2" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including.
            </p>
          </div>
          <hr />

          <div className="space-y-4">
            <h3 className=" font-bold text-gray-900">Why are we a plumbing industry leader?</h3>
            <p className="text-gray-600">
              The answer to that question is in a million details....and we sweat every one of them. Every mechanic,
              every member of management and every employee is totally dedicated to this principle.
            </p>
            <p className="text-gray-600">
              This is why My Plumber is an unchallenged bench-mark for quality, experience and rock-steady
              professionalism, in our industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

