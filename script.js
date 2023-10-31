   <script src="/node_modules/angular/angular.js"></script>
    <script src="/node_modules/angular-aria/angular-aria.js"></script>
    <script src="/node_modules/angular-animate/angular-animate.js"></script>
    <script src="/node_modules/angular-messages/angular-messages.js"></script>
    <script src="/node_modules/angular-material/angular-material.js"></script>
    <script>

        function DemoCtrl($timeout, $q, $log, $scope) {
            var self = this;

            self.readonly = false;
            $scope.isDropdownOpen = false;
            
            $scope.pesquisa = null;

            $scope.addAndClose = function() {
                if ($scope.pesquisa) {
                    self.listaFiltros.push({title: $scope.title, value: $scope.pesquisa});
                }
                $scope.closeModal();
            };
            

            // Lists of fruit names and Vegetable objects
            self.nomesFiltros = [];
            self.ngChangenomesFiltros = angular.copy(self.nomesFiltros);
            self.listaFiltros = angular.copy(self.nomesFiltros);
            self.editablenomesFiltros = angular.copy(self.nomesFiltros);

            self.tags = [];
           

            self.newVeg = function (chip) {
                return {
                    name: chip,
                    type: 'unknown'
                };
            };

            self.onModelChange = function (newModel) {
                $log.log('The model has changed to ' + newModel + '.');
            };
            
            function myFunction() {
                $('#myDropdown').toggleClass('show');
              }
              
              self.toggleDropdown = function () {
                self.isDropdownOpen = !self.isDropdownOpen;
            };
            
              $scope.toggleDropdown = function () {
                var dropdown = document.getElementById("myDropdown");
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "block";
                }
            }
            $scope.openModal = function (title) {
                var modal = document.getElementById("myModal");
                var modalTitle = document.getElementById("modalTitle");
                modal.style.display = "block";
                modalTitle.textContent = title;
                $scope.pesquisa = ""; 
                $scope.title = title;
            }
            
            
            $scope.closeModal = function() {
                var modal = document.getElementById("myModal");
                modal.style.display = "none";
                $scope.pesquisa = ""; 
            }
            
       
            window.onclick = function(event) {
                var modal = document.getElementById("myModal");
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            
        }

        // Include app dependency on ngMaterial
        angular.module('YourApp', ['ngMaterial', 'ngMessages'])
            .controller("BasicDemoCtrl", DemoCtrl);



    </script>
