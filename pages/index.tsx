import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>Заголовок</Htag>
			<Button appearance='primary' arrow="right">Кнопка</Button>
			<Button appearance='ghost' arrow="right">Кнопка</Button>
			<Ptag className="p" size='big'>Привет это большой текст</Ptag>
			<Ptag className="p">Привет это стандартный текст</Ptag>
			<Ptag className="p" size='small'>Привет это маленький текст</Ptag>
			<Tag size='small'>Маленький</Tag>
			<Tag size='big'>Большой</Tag>
			<Tag size='big' color='red'>Большой</Tag>
			<Tag size='big' color='ghost'>Большой</Tag>
			<Tag size='big' color='green'>Большой</Tag>
			<Tag size='small' color='primary'>Маленький</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}