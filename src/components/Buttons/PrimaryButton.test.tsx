import * as React from 'react';
import * as sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
  it('Should render correctly with no props', () => {
    const component = shallow(<PrimaryButton />);
    expect(component).toMatchSnapshot();
  });

  it('Allows props to be set', () => {
    const testWidth = '250px';
    const testHeight = '40px';
    const component = mount(
      <PrimaryButton width={testWidth} height={testHeight} />
    );
    expect(component.props().width).toEqual(testWidth);
    expect(component.props().height).toEqual(testHeight);
  });

  it('Allows children to be passed through', () => {
    const child = <div className="button-label">Label</div>;
    const component = mount(<PrimaryButton>{child}</PrimaryButton>);
    expect(component.contains(child)).toEqual(true);
    expect(component.contains('some other value')).toEqual(false);
  });

  it('Allows external classNames to be supplied', () => {
    const testClassName = 'test-class-name';
    const component = mount(<PrimaryButton className={testClassName} />);
    expect(component.hasClass(testClassName)).toEqual(true);
    expect(component.hasClass('some-failure-class')).toEqual(false);
  });

  it('Allows an onClick function to be supplied and used', () => {
    const onClick = sinon.spy();
    const component = shallow(<PrimaryButton onClick={onClick} />);
    component.simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
