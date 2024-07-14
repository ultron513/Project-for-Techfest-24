from flask import Flask, request, jsonify, send_file
import pandas as pd
import io

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_files():
    group_file = request.files['group_file']
    hostel_file = request.files['hostel_file']

    group_df = pd.read_csv(group_file)
    hostel_df = pd.read_csv(hostel_file)

    # Implement room allocation logic here and create a results DataFrame
    results_df = allocate_rooms(group_df, hostel_df)
    
    output = io.StringIO()
    results_df.to_csv(output, index=False)
    output.seek(0)
    
    return send_file(output, mimetype='text/csv', attachment_filename='room_allocation.csv', as_attachment=True)

def allocate_rooms(group_df, hostel_df):
    # Implement your allocation logic here
    # Return a DataFrame with the allocation results
    pass

if __name__ == '__main__':
    app.run(debug=True)
