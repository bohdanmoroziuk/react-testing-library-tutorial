import 'components/Header/Header.css';

export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <h1 title="Header" className="header">{title}</h1>
  );
}
