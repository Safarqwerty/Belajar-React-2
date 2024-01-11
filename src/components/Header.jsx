/* eslint-disable react/prop-types */
export default function Header({ author }) {
    return (<h1>Mari Besama-sama Belajar {author ? author : 'React'}</h1>);
}