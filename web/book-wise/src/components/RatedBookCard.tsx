import AllStart from './AllStar'

export default function RatedBookCard() {
  return (
    <div className="flex h-[24.375rem] w-[38rem] flex-col gap-2">
      <div className="flex h-[1.375rem] w-[37.90rem] items-center">
        <span className="text-sm text-gray-300">Há 2 dias</span>
      </div>
      <div className="flex h-[22.5rem] w-[37.90rem] flex-col items-center justify-center gap-6 rounded-lg bg-gray-700">
        <div className="flex h-[8.300rem] w-[35rem] gap-4 rounded-md">
          <div className="h-[7.875rem] w-[5.75rem] rounded-[4px] bg-[url(../assets/books/arquitetura-limpa.png)] bg-cover"></div>

          <div className="flex h-[7.875rem] w-[9.5rem] flex-col justify-between">
            <div className="flex h-[2.75rem] flex-col">
              <div className="flex h-[2.75rem] w-full flex-col">
                <h3 className="text-left text-sm font-bold text-gray-100">
                  Arquitetura limpa
                </h3>
                <span className="text-left text-sm text-gray-400">
                  Robert C. Martin
                </span>
              </div>
            </div>

            <AllStart />
          </div>
        </div>

        <div className="h-[auto] w-[35rem]">
          <span className="text-sm text-gray-300">
            Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
            non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
            suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
            tristique pretium quam. Mollis et luctus amet sed convallis varius
            massa sagittis. Proin sed proin at leo quis ac sem. Nam donec
            accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem
            urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam
            amet integer pellentesque.
          </span>
        </div>
      </div>
    </div>
  )
}
