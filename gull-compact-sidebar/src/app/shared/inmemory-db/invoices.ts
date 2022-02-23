export class InvoiceDB {
    static invoices = [
        {
            id: '5a9ae2106518248b68251fd1',
            orderNumber: '232',
            orderStatus: 'Pending',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Schoen, Conn and Mills',
                address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                name: 'Item 1',
                unit: 9,
                unitPrice: 200
            }, {
                name: 'Item 2',
                unit: 15,
                unitPrice: 300
            }]
        },
        {
            id: '5a9ae2106518248b68251fd2',
            orderNumber: '233',
            orderStatus: 'Processing',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'New Age Inc.',
                address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                name: 'Item 1',
                unit: 3,
                unitPrice: 2000
            }, {
                name: 'Item 2',
                unit: 2,
                unitPrice: 4000
            }]
        },
        {
            id: '5a9ae2106518248b68251fd3',
            orderNumber: '234',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Predovic, Schowalter and Haag',
                address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                name: 'Item 1',
                unit: 5,
                unitPrice: 1000
            }, {
                name: 'Item 2',
                unit: 2,
                unitPrice: 4000
            }]
        },
        {
            id: '5a9ae2106518248b68251fd4',
            orderNumber: '235',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Hane PLC',
                address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                name: 'Item 1',
                unit: 3,
                unitPrice: 4000
            }, {
                name: 'Item 2',
                unit: 1,
                unitPrice: 5000
            }]
        }
    ]
}