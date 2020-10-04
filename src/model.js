import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/block'

const text = 'Modern JavaScript Frameworks like Angular, React and Vue.js makes it very easy to build complex single page web applications. However, using a those frameworks is not mandatory and you can also go with plain and pure JavaScript.'


export const model = [
    new TitleBlock('Site constructor on pure JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'white',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        }
    }),
    new ColumnsBlock([
            'App on pure js',
            'OOP principles',
            'JavaScript - EASY'
        ], {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    ),
    new TextBlock(`${text}`, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]
