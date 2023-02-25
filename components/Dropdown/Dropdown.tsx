import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  useMemo
} from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { typedBoolean } from '../../utils/utils';
import Input from '../Input';
import ErrorLimit from '../ErrorLimit';
import {
  List,
  ListItem,
  DropdownContainer,
  ClearIcon,
  SelectButton
} from './style';

type IOption = { value: string; label: string };
interface DropdownProps {
  options: IOption[];
  placeholder?: string;
  isSearchable?: boolean;
  onChange: (value?: string) => void;
  value: string | undefined;
  error?: string;
  className?: string;
}

const Dropdown = (props: DropdownProps) => {
  const {
    options,
    placeholder,
    isSearchable,
    onChange,
    value,
    error,
    className
  } = props;
  const item = options.find(option => option.value === value);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOptions, setDropdownOptions] = useState<IOption[]>(
    isSearchable && item ? [item] : options
  );
  const [searchInputValue, setSearchInputValue] = useState<string>(
    item?.label || ''
  );

  const listRef = useRef<HTMLUListElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const focuseditem = useRef(0);

  const selectedItem = useMemo(
    () => options.find(option => option.value === value),
    [options, value]
  );

  const handleDropdownClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  // Filters options on the basis of search string
  const filterOptions = (filterValue: string) => {
    const filteredOptions = options.filter(({ label }) =>
      label.toLowerCase().includes(filterValue.toLowerCase())
    );

    setDropdownOptions(filteredOptions);
    return filteredOptions;
  };

  // Handler function when item is selected from the list
  const onItemSelected = (item: IOption) => () => {
    setIsOpen(false);
    if (isSearchable) {
      setSearchInputValue(item.label);
      const filteredOptions = filterOptions(item.label);
      setFocusedItem(item, filteredOptions);
    } else {
      setFocusedItem(item);
    }
    onChange(item.value);
  };

  // Function when input field searchable dropdown is focused
  const onSearchInputFocus = () => {
    setIsOpen(true);
    setFocusedItem();
  };

  // function to handle when input field is changed
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setSearchInputValue(target.value);
    filterOptions(target.value);
  };

  // Executes when clear icon is clicked
  const onClearInput = () => {
    setSearchInputValue('');
    onChange(undefined);
    setDropdownOptions(options);
    focuseditem.current = 0;
  };

  /*
   ** Accessibility functions are below. These functions are used to handle
   ** dropdown actions using keyboard
   */

  // Function to set index of "focusedItem" ref to selected option when option is selected
  // and user might have navigated to other option
  const setFocusedItem = (item?: IOption, filteredOptions?: IOption[]) => {
    const selectedOption = item || selectedItem;
    let focusedIndex = 0;
    const options = filteredOptions || dropdownOptions;
    if (selectedOption) {
      focusedIndex = options.findIndex(
        ({ value }) => value === selectedOption.value
      );
    }
    focuseditem.current = focusedIndex;
  };

  // Function to increment the focused item index but keep it between 0 and dropdownOptions.length
  const incrementFocusedItem = () => {
    focuseditem.current = (focuseditem.current + 1) % dropdownOptions.length;
  };

  // Function to decrement the focused item index but keep it between 0 and dropdownOptions.length
  const decrementFocusedItem = () => {
    if (focuseditem.current === 0) {
      focuseditem.current = dropdownOptions.length - 1;
    } else {
      focuseditem.current -= 1;
    }
  };

  // Function to focus the item
  const focusListItem = () => {
    try {
      const listElement = listRef.current?.children[
        focuseditem.current
      ] as HTMLLIElement;
      listElement.focus();
    } catch (err) {}
  };

  // Function to handle key press when any item is focused
  const onKeyPressUl = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.key) {
      case 'Escape':
        setFocusedItem();
        setIsOpen(false);
        break;
      case 'ArrowUp':
        decrementFocusedItem();
        focusListItem();
        break;
      case 'ArrowDown':
        incrementFocusedItem();
        focusListItem();
        break;
      case 'Enter':
        onItemSelected(dropdownOptions[focuseditem.current])();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Function to handle key press when dropdown is focused but item is not focused
  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      listRef.current?.focus();
      focusListItem();
      e.preventDefault();
    }
  };

  // Event listener to close dropdown when clicked outside.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        listRef.current &&
        !listRef.current.contains(event.target as Node) &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedItem();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [value]);

  return (
    <DropdownContainer className={className}>
      <div ref={selectRef} onKeyDown={onKeyPress}>
        {isSearchable ? (
          <Input
            hasError={typedBoolean(error)}
            placeholder={placeholder}
            onFocus={onSearchInputFocus}
            endIcon={
              searchInputValue ? (
                <ClearIcon onClick={onClearInput} />
              ) : (
                <FaChevronDown />
              )
            }
            onChange={onSearch}
            value={searchInputValue}
          />
        ) : (
          <SelectButton
            hasValue={typedBoolean(value)}
            hasError={typedBoolean(error)}
            onClick={handleDropdownClick}
          >
            {selectedItem?.label || placeholder || ''}
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </SelectButton>
        )}
      </div>
      <List
        ref={listRef}
        tabIndex={-1}
        onKeyDown={onKeyPressUl}
        isOpen={isOpen}
      >
        {dropdownOptions.map((item, index: number) => (
          <ListItem
            key={item.value}
            onClick={onItemSelected(item)}
            tabIndex={-1}
          >
            {item.label}
          </ListItem>
        ))}
      </List>

      <ErrorLimit error={error} />
    </DropdownContainer>
  );
};
export default Dropdown;
