import QueroIrApi from '../../img/logo-laravel.webp';
import Portfolio from '../../img/logo-site.webp';
import QueroIrApp from '../../img/flutter-logo.webp';

export const Projects = [
    {
        name: 'Quero Ir API',
        link: 'https://github.com/AndreTGama/quero-ir-api',
        star: 0,
        image: QueroIrApi,
        description: 'Uma API que está sendo construida com o framework Laravel, utilizando as boas praticas do desenvolvimento',
        languages: [
            'Laravel',
            'PHP'
        ]
    },
    {
        name: 'Quero Ir APP',
        link: 'https://github.com/AndreTGama/quero-ir-app',
        star: 0,
        image: QueroIrApp,
        description: 'Um APP que está sendo desenvolvido em Flutter',
        languages: [
            'Flutter'
        ]
    },
    {
        name: 'Portfolio',
        link: 'https://github.com/AndreTGama/portfolio',
        star: 0,
        image: Portfolio,
        description: 'Um site que está sendo desenvolvido em React com TypeScript',
        languages: [
            'React',
            'TypeScript'
        ]
    },
];