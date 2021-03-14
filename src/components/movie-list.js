import React from 'react';
import Movie from './movie';



export default class MovieList extends React.Component {
    render() {
        const firstMovie = {
            title: 'Hidden Figures',
            year: 'Released: 2016',
            synopsis: `The untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson brilliant African-American women working at 
                       NASA and serving as the brains behind one of the greatest operations in history the launch of astronaut John Glenn into orbit.`,
            uri: "https://play-lh.googleusercontent.com/yGicT_34j9qpo2J8pKZ2BNesN_mz8vZovbnffC0xZI60jrUd063DJ-N9OLmhdxch8m4R_w=w500-h700-rw",
        };

        const secondMovie = {
            title: 'Get Out',
            year: 'Released: 2017',
            synopsis: `Now that Chris (Daniel Kaluuya) and his girlfriend, Rose (Allison Williams), have reached the meet-the-parents milestone of dating, 
                       she invites him for a weekend getaway upstate with Missy and Dean. At first, Chris reads the family's overly accommodating behavior 
                       as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly 
                       disturbing discoveries lead him to a truth that he never could have imagined.`,
            uri: "https://play-lh.googleusercontent.com/tKJp-kgOJFVItvkEZCLaReCNW_uHR6xkGPv7StDjNsr7oBk5TX6rbyljllWStg5-L-5IUt6-iHBwhmP45HD0=w400-h600-rw",
        };

        const thirdMovie = {
            title: 'Us',
            year: 'Released: 2019',
            synopsis: `Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child. Haunted 
                       by a traumatic experience from the past, Adelaide grows increasingly concerned that something bad is going to happen. Her worst fears 
                       soon become a reality when four masked strangers descend upon the house, forcing the Wilsons into a fight for survival. When the masks 
                       come off, the family is horrified to learn that each attacker takes the appearance of one of them.`,
            uri: "https://play-lh.googleusercontent.com/LAJXlMMpXZ7R3hr-UI0U2xuaA6qz_RMK6-IKFZMQVak9gZpxESXMdV16ZQOMOoWfBmnU=w400-h600-rw",
        };

        const fourthMovie = {
            title: 'Moonlight',
            year: 'Released: 2016',
            synopsis: `A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood. Three time periods - young adolescence, mid-teen and young adult - in the life of black-American Chiron is presented.`,
            uri: "https://play-lh.googleusercontent.com/zHDi6kdlhV8QhGHz1W4VT_76IVzkfbukIYJAZD9-gCy5PLrq--Fo-vY0f8hFhB7e2Cuk=w400-h600-rw",
        };

        return (
            <div>
                <div className="container">
                    <h1>Black Films</h1>
                    <div>
                    <Movie {...firstMovie} />
                    <br />
                    <Movie {...secondMovie} />
                    <br />
                    <Movie {...thirdMovie} />
                    <br />
                    <Movie {...fourthMovie} />
                    <br />
                    </div>
                </div>
            </div>
        );

    }
}