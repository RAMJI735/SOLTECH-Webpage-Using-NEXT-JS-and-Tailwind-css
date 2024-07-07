export default function LatestNews() {
    return (

        <div className="flex flex-wrap justify-center m-5">

            <div className="flex items-center justify-center flex-col m-5">
                <h1 className="m-3 text-4xl ">Latest News & Insights</h1>
                <p className="text-md opacity-80 m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium a est odio officiis</p>
            </div>

            <div>
            <div className="flex flex-row  justify-center m-5">


                <div className="m-2 w-96 ">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYxpXhyK6sKKx2gQesB1nKJ1zDklJbPgte13REmu9Ibs_GXytOR5fttUhNH7We1rTZHw&usqp=CAU"
                        className="rounded-md w-96 h-64" />
                    <div>
                        <p className="opacity-80 m-2 ml-0">SolTech News | Mar 31, 2024 </p>
                        <h5 className="text-2xl">Integer urna turpis donec ipsum a porta justo auctor</h5>
                        <p className="m-2 ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti!</p>
                        <p>9 Comments</p>

                    </div>
                </div>
                <div className="m-2 w-96">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebaVeCz_OEpANSOfCRkbuGL1zMnIdlT8PWGd05_OFf9bRptwbSBjNB_Dh6y_dex8rOR4&usqp=CAU"
                        className="rounded-md w-96 h-64" />

                    <div>
                        <p className="opacity-80 m-2 ml-0">Tutorials | Mar 31, 2024 </p>
                        <h5 className="text-2xl">A ligula risus diam auctor </h5>
                        <p className="m-2 ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti!</p>
                        <p>12 Comments</p>

                    </div>

                </div>

                <div className="m-2 w-96">
                    <img
                        src="https://img.freepik.com/premium-photo/traveling-concept-with-people-scene-flat-design-web-man-traveler-with-backpack-planning-route-map-mobile-app-hiking-vector-illustration-social-media-banner-marketing-material_9209-13302.jpg"
                        className="rounded-md w-96 h-64" />

                    <div>
                        <p className="opacity-80 m-2 ml-0">Inspiration | Mar 31, 2024 </p>
                        <h5 className="text-2xl">Donec sapien augue and integer turpis cursus</h5>
                        <p className="m-2 ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti!</p>
                        <p>9 Comments</p>

                    </div>
                </div>



            </div>
        </div>

        </div>

    );
}