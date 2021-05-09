import React, { useCallback, useEffect, useState } from 'react';
import api from '../../Services/api';
import { Container, CardList, Card, Title, Search, BtnMore } from './styles'

interface ResponseData {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}


const Comics: React.FC = () => {
    const [comics, setComics] = useState<ResponseData[]>([])
    const [searchTerm, setSearchTerm] = useState('');
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        api.get('/comics')
            .then(response => {
                setComics(response.data.data.results)
                console.log(response.data)
                console.log(response.data.data)
            }).catch(err => console.log(err))

    }, []);
    if (comics) console.log(comics)
    /*useEffect(() => {
        const selectedComics = comics.map((comic, index) => {
            if (!hasError) {
                if (!comic.title.toUpperCase().includes(searchTerm.toUpperCase()) && index === 19) {
                    btnSobre()
                } else {
                    //console.log(comic.title)
                }
            }
        })
        console.log(selectedComics)

    }, [searchTerm])
    */

    async function btnSobre() {
        try {
            const offset = comics.length;
            const response = await api.get('comics', {
                params: {
                    offset
                },
            });

            setComics([...comics, ...response.data.data.results])
            console.log(comics)

        } catch (error) {
            setHasError(true)
        }

    };




    return (
        <>
            <Container>
                <Title>Marvel Comics</Title>
                <Search
                    type="text"
                    placeholder="Pesquise uma HQ"
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                />
                <CardList>
                    {comics.map((comic) => {
                        return (
                            <Card key={comic.id} thumbnail={comic.thumbnail}>
                                <div id="img" />
                                <h1>{comic.title}</h1>
                                <p>{comic.description}</p>
                            </Card>
                        )
                    })}
                </CardList>
                <BtnMore onClick={btnSobre}>
                    <span>Mais HQS</span>
                </BtnMore>

            </Container>
        </>
    )
}
export default Comics;

