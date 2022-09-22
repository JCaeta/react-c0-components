import React from 'react';
import { Article } from '../../index';

export default
{
    title: 'Article ',
    component: Article ,
}

const Template = (args: any) => <Article  {...args} />;

export const Primary = Template.bind({});
Primary.args = 
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