export function UserProfileCard({firstName, lastName}) {
    return (
        <>
        <div class="w-full max-w-sm hidden md:block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-5">
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                alt="user"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Welcome {firstName} {lastName}!
              </h5>
              <br></br>
              <div className="text-center">
              <p className="text-xl">Get started by entering your metrics and track your weekly progress!</p>
              </div>
            </div>
          </div>
        </>
    )
}