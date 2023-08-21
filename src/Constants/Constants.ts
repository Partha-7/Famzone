export const restrictAlphaAndSplChar = (e: any) => {
  const charCode = e.nativeEvent.which || e.nativeEvent.keycode;
  if ((charCode >= 48 && charCode <= 57) || charCode == 8) {
    const result =
      e.target.selectionStart === 0 &&
      e.target.selectionEnd === e.target.value.length
        ? e.key
        : [
            e.target.value.slice(0, e.target.selectionStart),
            e.key,
            e.target.value.slice(e.target.selectionStart),
          ].join("");
  } else {
    e.preventDefault();
    return false;
  }
};
