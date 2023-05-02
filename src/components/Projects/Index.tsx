import { useEffect, useState } from 'react';
import Fancy from '../Cards/Fancy/Index';
import * as Global from '../../styles/global';

export default function Index(): JSX.Element {
    const [ projects, setProjects ] = useState<any>([]);

    useEffect(() => {
        loadProjects();
    });

    const loadProjects = async() => {
        const res = await fetch('https://api.github.com/users/AndreTGama/repos');
        const data = await res.json();
        setProjects(data);
        console.log(projects);
    }

    return (
        <>
            <Global.Container>
                <Fancy />
            </Global.Container>
        </>
    );
}
