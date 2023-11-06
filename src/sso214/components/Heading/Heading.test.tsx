import { render } from '@testing-library/react';
import Heading, { Props, HEADING_LEVEL } from './Heading';

function renderHeading(props: Props) {
  const result = render(<Heading {...props} />);

  const HeadingEl = () => result.getByTestId('heading');

  return {
    HeadingEl,
  };
}

describe('<Heading />', () => {
  it('Heading 텍스트가 올바르게 노출된다.', () => {
    const { HeadingEl } = renderHeading({ headingLevel: 'h1', children: 'Title' });

    expect(HeadingEl()).toHaveTextContent('Title');
  });

  it.each(HEADING_LEVEL)('주어진 headingLevel 에 맞는 태그가 렌더링된다.', (tag) => {
    const { HeadingEl } = renderHeading({ headingLevel: tag });

    expect(HeadingEl().tagName).toBe(tag.toUpperCase());
  });

  it('주어진 attribute 가 올바르게 적용된다.', () => {
    const { HeadingEl } = renderHeading({ headingLevel: 'h2', id: 'title2' });

    expect(HeadingEl()).toHaveAttribute('id', 'title2');
  });
});
