import React from 'react';
import PropTypes from 'prop-types';
import "./Article.css"

export const Article= (props: any) => 
{
    document.documentElement.style.setProperty('--background-color', props.backgroundColor);
    document.documentElement.style.setProperty('--title-color', props.titleColor);

    function createSection(section: any) {
        return section;
    }

    return (<>
        <div className="content">
            <article className="article-content">
                <h1 id="article-title">{props.title}</h1>
                {props.sections.map((s: any) => createSection(s))}
            </article>
        </div>
    </>);
}

Article.defaultProps =
{
    title: "This is the title of the articule",
    backgroundColor: "white",
    titleColor: "black",

    sections: [
        <section>
            <h1>Title 1</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quod in sunt illo numquam cupiditate laboriosam inventore voluptatem ullam delectus! Porro non ex illo consectetur in consequatur incidunt soluta impedit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam tempore, quis unde dolore ex voluptas architecto. Ipsa earum sunt atque reprehenderit explicabo optio dolor ea tempore. Quis, et accusantium!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis quia eum iste libero enim eaque animi totam deleniti doloribus! Harum tempore repellat accusamus pariatur, repudiandae odit iusto corrupti accusantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur! Reiciendis qui vitae fuga quo molestiae nostrum excepturi earum consequatur iure repudiandae, necessitatibus dolorem vel laudantium doloribus id odio voluptatibus.
            </p>
        </section>, 

        <section>
        <h1>Title 2</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quod in sunt illo numquam cupiditate laboriosam inventore voluptatem ullam delectus! Porro non ex illo consectetur in consequatur incidunt soluta impedit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam tempore, quis unde dolore ex voluptas architecto. Ipsa earum sunt atque reprehenderit explicabo optio dolor ea tempore. Quis, et accusantium!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis quia eum iste libero enim eaque animi totam deleniti doloribus! Harum tempore repellat accusamus pariatur, repudiandae odit iusto corrupti accusantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur! Reiciendis qui vitae fuga quo molestiae nostrum excepturi earum consequatur iure repudiandae, necessitatibus dolorem vel laudantium doloribus id odio voluptatibus.
        </p>
    </section>
    ]
}

Article.propTypes = 
{
    title: PropTypes.string,
    titleColor: PropTypes.string,
    sections: PropTypes.any,
    backgroundColor: PropTypes.string,

}