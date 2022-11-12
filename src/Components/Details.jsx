import React from 'react'
import Chat from './Chat';

const Details = () => {
    return (
        <div className='container'>
            <div id="carouselExampleIndicators" className="carousel slide py-3" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1550x550/?pharmacy" className="d-block w-100" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>    

            <div className='content'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia officia sit, totam aperiam voluptate tenetur, assumenda placeat veritatis commodi nesciunt quas beatae distinctio repellat tempora nemo voluptas rem reiciendis? Reiciendis porro explicabo magni eveniet, rem quibusdam laboriosam facere obcaecati, voluptatum natus recusandae neque totam quis atque ab, fuga sint esse dolores veniam illo dignissimos laborum. Quam velit harum molestias laborum praesentium explicabo sed, optio aut commodi vel modi vero nam aspernatur culpa cum dignissimos et facilis rerum! Eveniet delectus voluptatibus nam illum amet libero ducimus vel, excepturi laboriosam distinctio totam doloremque facere enim, perferendis veniam iure nisi consequatur qui expedita earum aspernatur fuga laudantium? Eius ipsam est quasi dolores placeat asperiores dolor adipisci ad dolorum numquam aliquid impedit tempore, provident nostrum magni omnis, non porro iusto veritatis architecto modi, quod esse? Iusto aspernatur mollitia dolore nemo nobis in similique! Beatae, fugit provident sapiente doloremque delectus numquam eligendi quam adipisci, exercitationem voluptas, quis hic laborum eaque ut id rerum obcaecati minima dolore dignissimos eos. Accusamus distinctio alias veritatis magnam unde. Placeat, eligendi! Aliquam, quo vitae! Aliquam hic natus quo fuga officiis libero laudantium temporibus, necessitatibus facere adipisci repellat sunt exercitationem unde consequatur obcaecati! Hic vero quam natus praesentium reiciendis reprehenderit incidunt unde molestiae? Officiis doloremque suscipit repudiandae fugit possimus illum expedita rem sequi quas. Adipisci consequatur ullam molestias in exercitationem expedita provident tenetur odit maxime inventore, libero quas at et officia, cumque, voluptate explicabo itaque sit placeat non. Illum quasi voluptates debitis unde. Ad amet asperiores velit perferendis, repudiandae iure. Officiis nulla adipisci numquam odit recusandae, quia aperiam minus commodi deserunt provident mollitia, nemo illo ratione eius quae enim dolorem placeat doloremque aut vitae sed? Consequatur suscipit numquam quidem facere voluptate quod deserunt animi laborum? Deserunt laborum debitis sit perspiciatis minus quae vitae repellendus alias hic officia commodi dicta est ab voluptate, nulla a. Dignissimos repudiandae porro incidunt in voluptatem laborum, ipsa nobis nemo non ad, totam quisquam. Laboriosam, cum. Modi blanditiis magnam deserunt maiores hic incidunt possimus placeat, tempora dolore vero saepe recusandae aspernatur ut ipsa quia explicabo tempore voluptates consequatur nesciunt nulla sequi ab neque. Qui eos consequatur quo! Dolore suscipit sapiente nihil veniam, nisi earum nobis ipsum quidem, at voluptates repudiandae magnam voluptatum illum similique repellat hic alias eligendi fugiat voluptatibus beatae unde! Sunt quisquam non esse temporibus earum autem dignissimos dolorum quia fugiat eius obcaecati totam natus nulla accusamus, eos magni consectetur corrupti. Assumenda at molestiae ullam iure temporibus quisquam quia, id natus asperiores eaque dignissimos explicabo cum ipsam facere nesciunt voluptate corporis expedita magni quas consequuntur ratione fugiat amet, alias et. Tempore, officia ipsam aliquam molestias nesciunt, ipsum culpa cupiditate ab aspernatur eveniet iusto ratione nam consectetur, non reiciendis earum rerum minima voluptatibus repudiandae provident. Commodi inventore corporis mollitia quas delectus autem veniam laudantium expedita aut, magni, placeat saepe quam iste debitis reprehenderit, eaque dolorum. Maiores quidem quo ut placeat minus laborum ullam harum a, ex corrupti cupiditate mollitia, velit adipisci illo aut incidunt optio quis repellat! Laudantium odit dolorem provident ab illum nihil necessitatibus.
                </p>

                {/* <Chat/> */}
            </div>
        </div>
    )
}

export default Details;

