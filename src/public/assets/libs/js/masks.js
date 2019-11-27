
$("input[id*='date_of_birth']").inputmask({
    mask: ['99/99/9999'],
    keepStatic: true
});

$("input[id*='shipping_date']").inputmask({
    mask: ['99/99/9999'],
    keepStatic: true
});

$("input[id*='cep']").inputmask({
    mask: ['99999-999'],
    keepStatic: true
});

$("input[id*='phone']").inputmask({
    mask: ['(99) 99999-9999'],
    keepStatic: true
});
