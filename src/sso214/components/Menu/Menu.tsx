import { Heading } from '../Heading';
import { MenuInfo } from './types';
import S from './style.module.css';

interface Props {
  data: MenuInfo;
}

const Menu = ({ data }: Props) => {
  const { name, options, image, description, isPopular, tags } = data;

  return (
    <li className={S.container}>
      <div className={S.info}>
        <Heading headingLevel="h3">
          {name}
          {isPopular && <span className={`${S.badge} ${S.popularBadge}`}>인기</span>}
        </Heading>

        {description && <p className={S.description}>{description}</p>}

        <ul className={S.prices}>
          {options.map((option, index) => (
            <li key={index}>
              {option.name && `${option.name} :`}
              <b>{option.price}원</b>
            </li>
          ))}
        </ul>

        {tags && (
          <ol className={S.tags}>
            {tags.map((tag) => (
              <li key={tag} className={S.badge}>
                {tag}
              </li>
            ))}
          </ol>
        )}
      </div>

      {image && (
        <div className={S.imageBox}>
          <img src={image} alt={name} />
        </div>
      )}
    </li>
  );
};

export default Menu;
