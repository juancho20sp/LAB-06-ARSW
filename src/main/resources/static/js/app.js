app = (function(){
    let _module = apimock;
    let _selectedAuthorName;
    let _blueprintsByAuthor = [];
    let _totalPointsLabel;


    const _tableBody = $('#table-body');
    const _getBlueprintsBtn = document.querySelector('#getBlueprintsBtn');


    // Functions
    const blueprintsCallback = (blueprintsList) => {
        const list = blueprintsList.map(blueprint => {
            return {
                name: blueprint.name,
                points: blueprint.points.length
            }
        });

        // Clear the table
        _tableBody.empty();

        list.map(blueprint => {
            const { name, points } = blueprint;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${points}</td>
            `

            _tableBody.append(row);

        });

        _totalPointsLabel = list.reduce((acc, cur) => acc + cur.points, 0);
    }

    const readInputData = () => {
        _selectedAuthorName = $('#authorName').val();

        if (_selectedAuthorName) {
            _module.getBlueprintsByAuthor(_selectedAuthorName, blueprintsCallback);
        }
    }

    const getBlueprints = (event) => {
        event.preventDefault();
        readInputData();
    }



    // EVENT LISTENERS
    const loadEventListeners = () => {
        _getBlueprintsBtn.addEventListener('click', getBlueprints)
    }





    loadEventListeners();

    return {
        setModule: (module = apimock) => {
            _module = module;
        },

        setSelectedAuthorName: (name) => {
            _selectedAuthorName = name;
        },

        setBlueprintsByAuthor: (blueprintsList = []) => {
            _blueprintsByAuthor = blueprintsList;
        },

        updateAuthorName: (newName) => {
            _selectedAuthorName = newName;
        },

        refreshBlueprintsList: () => {
            const callback = (blueprintsList) => {

            }

            _module.getBlueprintsByAuthor()
        }

    }
})();

/*
Example of use:
var fun=function(list){
	console.info(list);
}

apimock.getBlueprintsByAuthor("johnconnor",fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/




app = (function(){
    let _module = apimock;
    let _selectedAuthorName;
    let _blueprintsByAuthor = [];
    let _totalPointsLabel;


    const _tableBody = $('#table-body');
    const _getBlueprintsBtn = $('#getBlueprintsBtn');

    // EVENT LISTENERS
    _getBlueprintsBtn.on('click', alert('holiwi'));

    const privateMethod = () => {

    }

    return {
        setModule: (module = apimock) => {
            _module = module;
        },

        setSelectedAuthorName: (name) => {
            _selectedAuthorName = name;
        },

        setBlueprintsByAuthor: (blueprintsList = []) => {
            _blueprintsByAuthor = blueprintsList;
        },

        updateAuthorName: (newName) => {
            _selectedAuthorName = newName;
        },

        refreshBlueprintsList: () => {
            const callback = (blueprintsList) => {
                const list = blueprintsList.map(blueprint => {
                    name: blueprint.name;
                    points: blueprint.points.length;
                });

                // Clear the table
                _tableBody.empty();

                list.map(blueprint => {
                    const { name, points } = blueprint;

                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${name}</td>
                        <td>${points}</td>
                    `

                    _tableBody.append(row);


                });

                _totalPointsLabel = list.reduce((acc, cur) => acc + cur.points, 0);
            }

            _module.getBlueprintsByAuthor()
        }

    }
})();

/*
Example of use:
var fun=function(list){
	console.info(list);
}

apimock.getBlueprintsByAuthor("johnconnor",fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/




