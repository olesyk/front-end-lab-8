var rootNode = document.getElementById("root");

// Your code goes here
function createFileTree(arr) {
	var ul = document.createElement('ul');
	for (var i = 0; i < arr.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = arr[i].folder ? 
		'<div class="grey push"><i class="material-icons folder-icon">folder</i>' + arr[i].title + '</div>': 
		'<div class="grey"><i class="material-icons file-icon">insert_drive_file</i>' + arr[i].title + '</div>';
		if (arr[i].children) {
			var childrenUl = createFileTree(arr[i].children);
			if (childrenUl) {
				var div = document.createElement('div');
				div.className = 'fg';
				div.style.display = 'none';
				div.appendChild(childrenUl);
				li.appendChild(div);
			}
		}
		if (!arr[i].children && arr[i].folder) {
			var warn = document.createElement('div');
			warn.className ='warnning';
			warn.style.display = 'none';
			warn.innerHTML = 'Folder is empty';
			li.appendChild(warn);
		}
		ul.appendChild(li);
	}
	return ul;
}
function clickFolder(event) {
	if (event.target.className != 'grey push') return;
	toggleFolder(event.target);
}

function toggleFolder(node) {
	if (node.firstElementChild.innerHTML === 'folder') {
		node.firstElementChild.innerHTML = 'folder_open';
		node.nextElementSibling.style.display = 'block';
	} else {
		node.firstElementChild.innerHTML = 'folder';
		node.nextElementSibling.style.display = 'none';
	}
}

rootNode.appendChild(createFileTree(structure));
var ul = document.querySelector('ul');
ul.addEventListener('click', clickFolder);