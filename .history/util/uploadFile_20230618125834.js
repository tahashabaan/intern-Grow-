const multer = require('multer');

const storage = multer.memoryStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads/');
    },

    filename:function(req, file, cb){
      cb(null, Date.now()+'-'+file.originalname);
    }
})

const fileFilter = (req, file , cb) => {
    const type = file.mimetype.split('/')[0];
    if (type !== 'image') {
        return cb(new Error('only image you can upload'), null)
    }
      cb(null, true);
}

   const upload = multer({storage, fileFilter});
   
 exports.<!-- Button trigger modal -->
 <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
   Launch
 </button>
 
 <!-- Modal -->
 <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
                <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
            <div class="modal-body">
                <div class="container-fluid">
                    Add rows here
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
 </div>
 
 <script>
    $('#exampleModal').on('show.bs.modal', event => {
        var button = $(event.relatedTarget);
        var modal = $(this);
        // Use above variables to manipulate the DOM
        
    });
 </script> = upload;