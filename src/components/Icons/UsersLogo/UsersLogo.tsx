import React from 'react';
import PropTypes from 'prop-types';
import "./UsersLogo.css";

export const UsersLogo = (props: any) => 
{
    document.documentElement.style.setProperty('--color_users-logo_rctc0comps', props.color);
    document.documentElement.style.setProperty('--color-hover_users-logo_rctc0comps', props.colorHover);
    document.documentElement.style.setProperty('--color-click_users-logo_rctc0comps', props.colorClick);

    return (<>
        <svg fill="#000000" height="100%" width="100%" version="1.1" id="users-logo_rctc0comps" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 611.998 611.998">
            <g>
                <g>
                    <path d="M382.167,150.945c9.702,10.875,16.557,24.306,20.381,39.921c3.629,14.822,4.44,31.308,2.414,49.006
                        c-0.751,6.546-1.861,13.96-3.479,21.802c12.532,12.135,28.95,19.839,50.296,19.838c59.22-0.005,80.529-59.3,86.105-108.006
                        c6.872-60.004-21.498-105.163-86.105-105.163c-50.698,0-79.079,27.82-85.628,68.798
                        C372.076,141.062,377.449,145.655,382.167,150.945z"/>
                    <path d="M611.973,422.704c-0.645-18.899-2.861-37.887-6.161-56.495c-3.992-22.539-9.08-55.585-28.759-70.275
                        c-11.38-8.491-26.117-11.278-39.143-16.398c-6.343-2.492-12.024-4.967-17.354-7.784c-17.995,19.734-41.459,30.055-68.782,30.057
                        c-21.261,0-40.172-6.281-56.001-18.358c-3.644,11.272-8.522,22.623-15.044,32.994c5.728,3.449,11.923,6.204,19.451,9.162
                        c3.332,1.31,6.99,2.506,10.864,3.771c10.472,3.422,22.339,7.301,32.994,15.255c25.329,18.907,31.564,54.336,36.117,80.207
                        l0.49,2.792c2.355,13.266,4.084,26.299,5.197,38.961c20.215-2.071,40.327-5.61,60.047-9.774
                        c15.941-3.365,31.774-7.471,47.109-13.003C605.247,439.397,612.476,437.343,611.973,422.704z"/>
                    <path d="M160.216,281.511c21.345,0.002,37.762-7.703,50.295-19.838c-1.618-7.841-2.728-15.256-3.479-21.802
                        c-2.026-17.697-1.214-34.184,2.414-49.006c3.823-15.614,10.679-29.046,20.381-39.921c4.718-5.291,10.09-9.884,16.014-13.805
                        c-6.549-40.978-34.93-68.798-85.628-68.798c-64.606,0-92.977,45.16-86.106,105.163
                        C79.687,222.212,100.996,281.507,160.216,281.511z"/>
                    <path d="M167.957,344.634c10.655-7.954,22.524-11.833,32.994-15.255c3.875-1.265,7.531-2.461,10.864-3.771
                        c7.528-2.957,13.725-5.711,19.451-9.162c-6.52-10.369-11.4-21.722-15.043-32.994c-15.829,12.077-34.741,18.358-56.001,18.358
                        c-27.322-0.001-50.788-10.324-68.782-30.057c-5.329,2.817-11.012,5.291-17.354,7.784c-13.026,5.12-27.763,7.907-39.143,16.398
                        c-19.678,14.691-24.767,47.735-28.759,70.275c-3.3,18.607-5.516,37.595-6.161,56.495c-0.502,14.64,6.726,16.693,18.974,21.112
                        c15.334,5.531,31.17,9.637,47.109,13.003c19.72,4.165,39.833,7.704,60.047,9.774c1.112-12.662,2.841-25.693,5.197-38.961
                        l0.49-2.792C136.394,398.971,142.628,363.541,167.957,344.634z"/>
                    <path d="M470.351,429.405l-0.493-2.805c-4.258-24.197-10.091-57.334-32.191-73.832c-9.321-6.957-19.872-10.404-30.078-13.74
                        c-4.019-1.313-7.812-2.554-11.427-3.974c-5.269-2.07-10.016-4.097-14.464-6.338c-18.684,24.932-44.58,38.059-75.383,38.062
                        c-30.795,0-56.687-13.128-75.371-38.062c-4.449,2.243-9.196,4.269-14.467,6.34c-3.61,1.418-7.406,2.659-11.424,3.972
                        c-10.207,3.335-20.761,6.784-30.079,13.74c-22.107,16.5-27.936,49.645-32.193,73.846l-0.493,2.795
                        c-3.557,20.086-5.68,39.572-6.308,57.914c-0.737,21.519,12.62,26.316,24.403,30.55l1.269,0.457
                        c14.17,5.112,30.021,9.492,48.457,13.388c37.646,7.946,68.197,11.74,96.138,11.938h0.072h0.072
                        c27.946-0.199,58.495-3.992,96.135-11.938c18.439-3.894,34.289-8.274,48.453-13.387l1.268-0.456
                        c11.786-4.233,25.147-9.029,24.41-30.553C476.03,468.931,473.906,449.447,470.351,429.405z"/>
                    <path d="M221.005,243.009c5.577,48.709,26.883,108.009,86.103,108.006s80.529-59.297,86.106-108.006
                        c6.871-60.002-21.503-105.16-86.106-105.16C242.515,137.847,214.123,183.002,221.005,243.009z"/>
                </g>
            </g>
        </svg>
    </>);
}

UsersLogo.defaultProps =
{
    color: "black",
    colorHover: "grey",
    colorClick: "green"
}

UsersLogo.propTypes = 
{
    color: PropTypes.string,
    colorHover: PropTypes.string,
    colorClick: PropTypes.string
}